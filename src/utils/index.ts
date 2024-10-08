export const fetcher = async (
  // eslint-disable-next-line no-undef
  resource: RequestInfo,
  // eslint-disable-next-line no-undef
  init?: RequestInit
): Promise<any> => {
  const res = await fetch(resource, init);

  if (!res.ok) {
    //レスポンスが失敗した時に例外を投げる
    const errorRes = await res.json();
    const error = new Error(
      errorRes.message ?? "APIリクエスト中にエラーが発生しました"
    );

    throw error;
  }
  return res.json();
};
