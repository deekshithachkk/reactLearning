import { useState, useTransition } from "react";
import About from "./About";
import Contact from "./Contact";
import Post from "./Post";
import TabButton from "./TabButton";

export default function TransitionHook() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("about");

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <>
      <TabButton onClick={() => selectTab("about")}>About</TabButton>
      <TabButton onClick={() => selectTab("posts")}>Posts (slow)</TabButton>
      <TabButton onClick={() => selectTab("contact")}>Contact</TabButton>
      <hr />
      {tab === 'about' && <About />}
      {tab === 'posts' && <Post/>}
      {tab === 'contact' && <Contact />}
    </>
  );
}
