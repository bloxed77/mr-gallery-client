export default function getCollections() {
    console.log(`${process.env.REACT_APP_SERVERHOST}/api/v1/folders/`);
    const collections = fetch(
        `${process.env.REACT_APP_SERVERHOST}/api/v1/folders/`
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data?.data?.doc || [];
        })
        .catch((e) => {
            throw new Error(e.message);
        });
    return collections;
}
