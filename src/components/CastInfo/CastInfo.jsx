const CastInfo = ({ castData }) => {
  console.log(castData);
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';
  return castData && castData.length > 0 ? (
    <ul>
      {castData.map(({ profile_path, original_name, character, id }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={150}
              alt="poster"
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>N/A</p>
  );
};

export default CastInfo;
