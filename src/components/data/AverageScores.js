import studentData from "./studentData";

const AverageScores = () => {
  // Heb geprobeerd de beide const opdrachtFilter en opdrachtTotaal uit de twee functies te halen, maar de data verdween toen ik dat deed.
  /* let opdrachtTotaal = (studentData, opdracht) => {
    const opdrachtFilter = studentData.filter(
      (object) => object.opdracht === opdracht
    );
     return opdrachtFilter.length;
  };*/

  //Dit rekent de gemiddelde leuk score uit.
  let leukGemiddeld = (studentData, opdracht) => {
    const opdrachtFilter = studentData.filter(
      (object) => object.opdracht === opdracht
    );
    const opdrachtTotaal = opdrachtFilter.length;

    let leukTotaal = opdrachtFilter.reduce(
      (prevCount, opdracht) => prevCount + opdracht.leuk,
      0
    );

    return leukTotaal / opdrachtTotaal;
  };

  //Dit rekent de gemiddelde moeilijk score uit.
  let moeilijkGemiddeld = (studentData, opdracht) => {
    const opdrachtFilter = studentData.filter(
      (object) => object.opdracht === opdracht
    );
    const opdrachtTotaal = opdrachtFilter.length;

    let moeilijkTotaal = opdrachtFilter.reduce(
      (prevCount, opdracht) => prevCount + opdracht.moeilijk,
      0
    );

    return moeilijkTotaal / opdrachtTotaal;
  };

  //Deze twee scores moeten per opdracht in een nieuw object komen waar de gemiddelden in staan...
  const gemiddeldeData = (data, opdracht) => {
    const opdrachtData = opdracht;
    const gemLeukData = leukGemiddeld(data, opdracht); //Moet natuurlijk per opdracht
    const gemMoeilijkData = moeilijkGemiddeld(data, opdracht);
    return {
      opdracht: opdrachtData,
      leuk: gemLeukData,
      moeilijk: gemMoeilijkData,
    };
  };

  //Nu moet deze nog worden toegepast op de studentData...
  const gemiddeldeTotaal = studentData.map((object) =>
    gemiddeldeData(studentData, object.opdracht)
  );
  return gemiddeldeTotaal;
};

export default AverageScores;

//Pfoe...
