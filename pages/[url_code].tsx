import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IData } from "../interface/IData";
import { getUrl } from "../services/getUrl";

const Post = () => {
  const [data, setData] = useState<IData>();
  const router = useRouter();
  const { url_code } = router.query;

  const loadData = async () => {
    const res = await getUrl("code", url_code as string, "/api/redirect");
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [url_code]);

  useEffect(() => {
    if (data?.url) {
      window.location.href = `${(data as IData).url}`;
    }
  }, [data]);

  return <div>{data === undefined && <p>loading...</p>}</div>;
};

export default Post;
