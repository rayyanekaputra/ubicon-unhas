import { DataResearchList } from "@data/research/dataResearch";
import "@components/research/rendererResearch.css";

//CARI: apa bedanya export default vs export biasa?
export function RendererResearch() {
  const rendererResearch = DataResearchList.map((researchField) => (
    //jangan dikasih parent container, karena disetiap item bakalan punya kalau dikasih
    //bukan secara keseluruhan

    <li className="list-research-field-item" key={researchField.id}>
      <p>{researchField.field}</p>
    </li>
  ));

  //return dalam bentuk apaki
  // return <ul>{rendererResearchList}</ul>;
  return rendererResearch;
}
