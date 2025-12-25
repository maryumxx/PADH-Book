import React, { useState, useEffect } from "react";

export default function BookChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const htmlElement = document.documentElement;
      setIsDarkMode(htmlElement.getAttribute('data-theme') === 'dark');
    };

    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);   

    // Add placeholder for assistant response
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("https://padh-book.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        assistantContent += chunk;

        // Update the last message with new content
        setMessages((prev) => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].content = assistantContent;
          return newMsgs;
        });
      }
    } catch (err) {
      setMessages((prev) => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1].content = `Error: ${err.message}`;
        return newMsgs;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .chat-messages::-webkit-scrollbar {
            width: 6px;
          }

          .chat-messages::-webkit-scrollbar-track {
            background: ${isDarkMode ? '#0a0a0a' : '#fafafa'};
          }

          .chat-messages::-webkit-scrollbar-thumb {
            background: ${isDarkMode ? '#404040' : '#d4d4d4'};
            border-radius: 3px;
          }

          .chat-messages::-webkit-scrollbar-thumb:hover {
            background: ${isDarkMode ? '#525252' : '#a3a3a3'};
          }
        `}
      </style>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: isDarkMode ? "#171717" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#171717",
          border: isDarkMode ? "1px solid #404040" : "1px solid #e5e5e5",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: isDarkMode
            ? "0 6px 20px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.2)"
            : "0 6px 20px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)",
          zIndex: 1000,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          overflow: "visible",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isDarkMode ? "#262626" : "#fafafa";
          e.currentTarget.style.transform = "translateY(-3px) scale(1.08)";
          e.currentTarget.style.boxShadow = isDarkMode
            ? "0 12px 28px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(123, 239, 255, 0.2)"
            : "0 12px 28px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(123, 239, 255, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = isDarkMode ? "#171717" : "#ffffff";
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = isDarkMode
            ? "0 6px 20px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.2)"
            : "0 6px 20px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)";
        }}
      >
        <div style={{
          position: "absolute",
          inset: "-8px",
          background: "linear-gradient(135deg, #7befff 0%, #9c5ffc 35%, #d49bc9 70%, #ffcda8 100%)",
          borderRadius: "50%",
          filter: "blur(18px)",
          opacity: isDarkMode ? "0.3" : "0.25",
          transition: "opacity 0.3s ease",
          zIndex: -1,
        }}></div>
        <img
          src="/img/logo.jpg"
          alt="Chat"
          style={{
            position: "relative",
            width: "65%",
            height: "65%",
            borderRadius: "50%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "88px",
            right: "24px",
            width: "340px",
            height: "480px",
            background: isDarkMode ? "#0a0a0a" : "#ffffff",
            borderRadius: "16px",
            boxShadow: isDarkMode
              ? "0 20px 40px rgba(0, 0, 0, 0.6), 0 8px 16px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(123, 239, 255, 0.1)"
              : "0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(123, 239, 255, 0.15)",
            display: "flex",
            flexDirection: "column",
            zIndex: 999,
            border: isDarkMode ? "1px solid #262626" : "1px solid #e5e5e5",
            overflow: "hidden",
            backdropFilter: "blur(20px)",
            animation: "slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            style={{
              padding: "14px 16px",
              background: isDarkMode
                ? "linear-gradient(135deg, #171717 0%, #0a0a0a 100%)"
                : "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
              color: isDarkMode ? "#fafafa" : "#171717",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: isDarkMode ? "1px solid #262626" : "1px solid #e5e5e5",
              position: "relative",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent 0%, rgba(123, 239, 255, 0.3) 50%, transparent 100%)",
              }}
            ></div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ position: "relative" }}>
                <img
                  src="/img/logo.jpg"
                  alt="Assistant"
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-1px",
                    right: "-1px",
                    width: "8px",
                    height: "8px",
                    background: "#10b981",
                    border: isDarkMode ? "2px solid #171717" : "2px solid #ffffff",
                    borderRadius: "50%",
                    boxShadow: "0 0 4px rgba(16, 185, 129, 0.5)",
                  }}
                ></div>
              </div>
              <span>Book Assistant</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: isDarkMode ? "#a3a3a3" : "#737373",
                fontSize: "20px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                width: "26px",
                height: "26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                lineHeight: "1",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";
                e.currentTarget.style.color = isDarkMode ? "#fafafa" : "#171717";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = isDarkMode ? "#a3a3a3" : "#737373";
              }}
            >
              ✕
            </button>
          </div>

          <div
            className="chat-messages"
            style={{
              flex: 1,
              padding: "16px",
              overflowY: "auto",
              background: isDarkMode
                ? "radial-gradient(circle at top right, rgba(123, 239, 255, 0.02) 0%, #0a0a0a 50%)"
                : "radial-gradient(circle at top right, rgba(123, 239, 255, 0.04) 0%, #fafafa 50%)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {messages.length === 0 && (
              <div
                style={{
                  color: isDarkMode ? "#a3a3a3" : "#737373",
                  fontSize: "13px",
                  textAlign: "center",
                  paddingTop: "30px",
                  lineHeight: "1.6",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                    fontSize: "28px",
                  }}
                >
                  💬
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    marginBottom: "6px",
                    color: isDarkMode ? "#d4d4d4" : "#525252",
                  }}
                >
                  Welcome!
                </div>
                Ask me anything about the book
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: "14px",
                    background:
                      msg.role === "user"
                        ? isDarkMode
                          ? "#ffffff"
                          : "#171717"
                        : isDarkMode
                        ? "#171717"
                        : "#ffffff",
                    color:
                      msg.role === "user"
                        ? isDarkMode
                          ? "#171717"
                          : "#ffffff"
                        : isDarkMode
                        ? "#fafafa"
                        : "#171717",
                    border:
                      msg.role === "assistant"
                        ? isDarkMode
                          ? "1px solid #262626"
                          : "1px solid #e5e5e5"
                        : "none",
                    maxWidth: "82%",
                    whiteSpace: "pre-wrap",
                    fontSize: "13px",
                    lineHeight: "1.6",
                    boxShadow:
                      msg.role === "user"
                        ? isDarkMode
                          ? "0 4px 12px rgba(255, 255, 255, 0.08), 0 2px 4px rgba(255, 255, 255, 0.04)"
                          : "0 4px 12px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)"
                        : isDarkMode
                        ? "0 1px 3px rgba(255, 255, 255, 0.02)"
                        : "0 1px 3px rgba(0, 0, 0, 0.03)",
                    position: "relative",
                  }}
                >
                  {msg.content ||
                    (loading &&
                    msg.role === "assistant" &&
                    i === messages.length - 1
                      ? "Thinking..."
                      : "")}
                  {msg.role === "user" && (
                    <div
                      style={{
                        position: "absolute",
                        inset: "-6px",
                        background: "linear-gradient(135deg, #7befff 0%, #9c5ffc 35%, #d49bc9 70%, #ffcda8 100%)",
                        borderRadius: "14px",
                        filter: "blur(16px)",
                        opacity: isDarkMode ? "0.2" : "0.18",
                        zIndex: -1,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "14px",
              borderTop: isDarkMode ? "1px solid #262626" : "1px solid #e5e5e5",
              background: isDarkMode
                ? "linear-gradient(180deg, #0a0a0a 0%, #171717 100%)"
                : "linear-gradient(180deg, #fafafa 0%, #ffffff 100%)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent 0%, rgba(156, 95, 252, 0.2) 50%, transparent 100%)",
              }}
            ></div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your question..."
                disabled={loading}
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  borderRadius: "20px",
                  border: isDarkMode ? "1px solid #404040" : "1px solid #d4d4d4",
                  fontSize: "13px",
                  outline: "none",
                  transition: "all 0.2s ease",
                  background: isDarkMode ? "#0a0a0a" : "#ffffff",
                  color: isDarkMode ? "#fafafa" : "#171717",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = isDarkMode ? "#737373" : "#737373";
                  e.currentTarget.style.boxShadow = isDarkMode
                    ? "0 0 0 3px rgba(156, 95, 252, 0.12)"
                    : "0 0 0 3px rgba(156, 95, 252, 0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = isDarkMode ? "#404040" : "#d4d4d4";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                style={{
                  padding: "10px 18px",
                  background: isDarkMode ? "#ffffff" : "#171717",
                  color: isDarkMode ? "#171717" : "#ffffff",
                  border: "none",
                  borderRadius: "20px",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontSize: "13px",
                  fontWeight: "600",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  opacity: loading ? 0.5 : 1,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.01em",
                  boxShadow: isDarkMode
                    ? "0 4px 12px rgba(255, 255, 255, 0.12)"
                    : "0 4px 12px rgba(0, 0, 0, 0.18)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = isDarkMode ? "#f5f5f5" : "#262626";
                    e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? "0 6px 16px rgba(255, 255, 255, 0.2), 0 0 20px rgba(156, 95, 252, 0.3)"
                      : "0 6px 16px rgba(0, 0, 0, 0.25), 0 0 20px rgba(156, 95, 252, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = isDarkMode ? "#ffffff" : "#171717";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = isDarkMode
                      ? "0 4px 12px rgba(255, 255, 255, 0.12)"
                      : "0 4px 12px rgba(0, 0, 0, 0.18)";
                  }
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, #7befff 0%, #9c5ffc 50%, #d49bc9 100%)",
                    opacity: isDarkMode ? "0.08" : "0.12",
                    pointerEvents: "none",
                  }}
                ></div>
                <span style={{ position: "relative" }}>
                  {loading ? "..." : "Send"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
