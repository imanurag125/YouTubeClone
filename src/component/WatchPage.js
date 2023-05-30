import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/slice/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChatContainer from "./LiveChatContainer";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);
  return (
    <div className="mt-5 px-5 py-3">
      <div className="flex justify-between gap-10">
        <div>
          <iframe
            width="800"
            height="400"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <CommentContainer />
        </div>
        <LiveChatContainer />
      </div>
    </div>
  );
};

export default WatchPage;
