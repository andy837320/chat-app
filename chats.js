import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import dynamic from "next/dynamic";
import { MoodOutlined } from "@material-ui/icons";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MesssageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MesssageFormSocial)
);

const Chats = () => {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("/");
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID=""
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MesssageFormSocial />}
        />
      </div>
    </div>
  );
};

export default Chats;
