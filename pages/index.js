import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import fetch from "isomorphic-unfetch";

const Home = (props) => {
  const cards = props.data.map((item, index) => (
    <Card
      key={index}
      username={item.login}
      img={item.avatar_url}
      url={item.html_url}
    />
  ));
  const [userdata, setUserData] = useState({});
  const [data, setData] = useState("");

  const getData = (event) => {
    setData(event.target.value);
  };
  const fetchData = async (data) => {
    try {
      const finalUrl = "https://api.github.com/users/" + data;
      const res = await fetch(finalUrl);
      const json = await res.json();
      if (res.status === 200) {
        console.log(json);
        setUserData(json);
      } else if (res.status === 404) {
        console.log(json);
        setUserData(json);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Layout title="Github user details:">
      <p>using https://api.github.com/users/ & Next.js</p>
      <div className="row">
        <div className="search-wrapper">
          <input
            type="search"
            placeholder="type your github username"
            onChange={getData}
          />
          <button onClick={() => fetchData(data)}>Search</button>
        </div>

        <Card
          msg={userdata.message}
          username={userdata.login}
          img={userdata.avatar_url}
          url={userdata.html_url}
        />
      </div>
      <div className="container">{cards}</div>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users");
  const json = await res.json();
  return {
    data: json,
  };
};

export default Home;
