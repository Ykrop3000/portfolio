/** @format */
import { db } from "./db";
// import axios from "axios";

const worksRef = db.collection("works");

export async function fetch_data_works_all() {
  const snapshot = await worksRef.get();
  const data = [];
  snapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
}

export async function fetch_data_work_one(slug) {
  const snapshot = await worksRef.where("slug", "==", slug).get();
  if (snapshot.empty) {
    return {};
  }
  return snapshot.docs[0].data();
}

const blogRef = db.collection("blog");

export async function fetch_data_blog_all() {
  const snapshot = await blogRef.get();
  const data = [];
  snapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
}

export async function fetch_data_blog_one(slug) {
  const snapshot = await blogRef.where("slug", "==", slug).get();
  if (snapshot.empty) {
    return {};
  }
  return snapshot.docs[0].data();
}