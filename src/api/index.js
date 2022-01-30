/** @format */
import { db } from "./db";
// import axios from "axios";

const collection_name = "works";
const dataRef = db.collection(collection_name);

export async function fetch_data_all() {
  const snapshot = await dataRef.get();
  const data = [];
  snapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
}

export async function fetch_data_one(slug) {
  const snapshot = await dataRef.where("slug", "==", slug).get();
  if (snapshot.empty) {
    return {};
  }
  return snapshot.docs[0].data();
}
