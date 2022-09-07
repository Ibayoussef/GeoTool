import React, { useState } from "react";
import { handleLibelle } from "./useLibelle";
import { handleDestDomi } from "./useDestdomi";
import { handleTypeZone } from "./useTypeZone";
export function App({ children }) {
  const [files, setFiles] = useState({});
  const [fileName, setFileName] = useState("");
  const [codeInsee, setCodeInsee] = useState("");
  const [link, setLink] = useState("");
  const [finalGeojson, setFinalGeojson] = useState({});
  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    setFileName(
      e.target.files[0].name.slice(0, e.target.files[0].name.length - 8)
    );
    setCodeInsee(e.target.files[0].name.slice(0, 5));

    fileReader.onload = (e) => {
      setFiles(JSON.parse(e.target.result));
    };
  };
  const handleLink = (e) => {
    const value = e.target.value;
    setLink(value);
  };

  React.useEffect(() => {
    Object.assign(files, {
      type: "FeatureCollection",
      code_insee: codeInsee,
      couverture: "commune",
      name: "ZONE_URBA",
      pieces_ecrites: {
        [fileName]: link,
      },
    });
    files.features?.map((p) => {
      Object.assign(p, {
        type: "Feature",
        code_insee: codeInsee,
        couverture: "commune",
      });

      Object.assign(p.properties, {
        code_insee: codeInsee,
        couverture: "commune",
        LIBELONG: handleLibelle(p.properties.LIBELLE),
        TYPEZONE: handleTypeZone(p.properties.LIBELLE),
        DESTDOMI: handleDestDomi(p.properties.LIBELLE),
        INSEE: codeInsee,
        DATAPPRO: "20140220",
        DATVALID: "20140220",
        NOM_FIC: fileName,
        URL_FIC: link,
      });
      delete p.properties["Id"];
    });

    console.log(files);
    setFinalGeojson(files);
  }, [files, codeInsee, fileName, link]);
  return (
    <>
      <h1>Geomaticien tool</h1>
      <div>
        <label>Reglement:</label>
        <input type="text" onChange={handleLink} />
      </div>
      <input
        type="file"
        onChange={
          link.length !== 0
            ? (e) => handleChange(e)
            : () => alert("entrer le lien pdf du reglement")
        }
      />
      <br />
      {finalGeojson.code_insee && (
        <a
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(finalGeojson)
          )}`}
          download={`${fileName}.geojson`}
        >
          Download final json
        </a>
      )}
    </>
  );
}
