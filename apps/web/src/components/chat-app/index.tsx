"use client"

import {useState} from "react";
import {Button, Switch, TextInput, useMantineColorScheme} from "@mantine/core";
import {Box, MultiSelect, Title} from "ui";
import * as styles from "./styles.css";

export const ChatApp = () => {
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<string[]>([]);
    const [activeChat, setActiveChat] = useState("Chat 1"); // Default active chat
    const chats = ["Chat 1", "Chat 2", "Chat 3"]; // Example chat rooms
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const chatGPTFeatures = [
        "Sentiment Analysis",
        "Language Translation",
        "Summarization",
        "Code Generation",
        "Image Generation",
    ];
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const sendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, inputValue]);
            setInputValue("");
            // Integrate logic to send the message to ChatGPT
        }
    };

    return (
        <Box className={styles.container}>
            <Box className={styles.leftNav}>
                <Switch
                    value="light"
                    onChange={() => toggleColorScheme()}
                    size="xl"
                    onLabel={<Box>{colorScheme}</Box>}
                    offLabel={<Box>{colorScheme}</Box>}
                    mb={25}
                />
                <a href="/" className={styles.navButton}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
                    </svg>
                </a>
                <a href="/" className={styles.navButton}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </Box>
            <Box className={styles.mainArea}>
                <header className={styles.header}>
                    <Title order={3}>AI Orchestration Layer</Title>
                    <MultiSelect
                        data={chatGPTFeatures}
                        value={selectedFeatures}
                        onChange={setSelectedFeatures}
                        placeholder="Select features"
                        className={styles.featureSelect}
                    />
                </header>
                <Box className={styles.mainContent}>
                    <Box className={styles.sidebar}>
                        {chats.map((chat, index) => (
                            <Button
                                key={index}
                                className={styles.chatButton}
                                variant={activeChat === chat ? "filled" : "light"}
                                onClick={() => setActiveChat(chat)}
                            >
                                {chat}
                            </Button>
                        ))}
                    </Box>

                    <Box className={styles.chatContainer}>
                        <Box className={styles.chatArea}>
                            {messages.map((msg, index) => (
                                <div key={index} className={styles.message}>
                                    {msg}
                                </div>
                            ))}
                        </Box>
                        <TextInput
                            className={styles.input}
                            value={inputValue}
                            onChange={(event) => setInputValue(event.currentTarget.value)}
                            placeholder="Type your message"
                            rightSection={<Button onClick={sendMessage}>Send</Button>}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}