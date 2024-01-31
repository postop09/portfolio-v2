import Head from "next/head";
import { useEffect } from "react";
import { db } from "./_app";
import {
  getDoc,
  deleteDoc,
  doc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    console.log("WOELD");
  }, []);

  const handleCreate = async () => {
    try {
      // const res = await addDoc(collection(db, "users"), {
      //   first: "CHO",
      //   middle: "YUNSIK",
      //   born: 961209,
      // });
      const project = doc(db, "portfolio", "portfolio");
      const res = await setDoc(
        project,
        { name: "포트폴리오", regDt: "2024.01.30", contents: "성공했습니다." },
        { merge: true },
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRead = async () => {
    try {
      const project = doc(db, "portfolio", "allreborn");
      const res = await getDoc(project);
      const res2 = await getDocs(collection(db, "portfolio"));
      console.log(res.data());
      console.log(res2.docs);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    try {
      const project = doc(db, "portfolio", "portfolio");
      const res = await deleteDoc(project);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  // 컬렉션조회 (목록조회) getDocs(collection(db, collectionName))
  // 문서조회 (상세조회) getDoc(doc(db, collectionName, docsName))

  // 컬렉션&문서생성 addDoc(doc(db, collectionName), {fieldData})

  // 문서수정 updateDoc(doc(db, collectionName, docsName), {fieldData})

  // 문서삭제 deleteDoc(doc(db, collectionName, docsName))

  return (
    <>
      <Head>
        <title>포트폴리오 홈</title>
      </Head>
      <main>
        <div>
          <button type="button" onClick={handleCreate}>
            생성
          </button>
        </div>
        <div>
          <button type="button" onClick={handleRead}>
            조회
          </button>
        </div>
        <div>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        </div>
        <Link href="home">홈으로 이동</Link>
      </main>
    </>
  );
}
