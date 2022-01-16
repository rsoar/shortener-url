import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IData } from "../interface/IData";
import { getUrl } from "../services/getUrl";

const Post = () => {
  const [dataBody, setDataBody] = useState<IData>();
  const router = useRouter();
  const { url_code } = router.query;

  const loadData = async () => {
    const res = await getUrl("code", url_code as string, "/api/redirect");
    setDataBody(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [url_code]);

  useEffect(() => {
    if (dataBody?.url) {
      window.location.href = `${(dataBody as IData).url}`;
    }
  }, [dataBody]);

  return <div>{dataBody === undefined && <p>loading...</p>}</div>;
};

export default Post;
