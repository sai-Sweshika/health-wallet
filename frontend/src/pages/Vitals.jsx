// export default function Vitals() {
//   return (
//     <>
//       <h2>Vitals Overview</h2>
//       <div className="hw-card">Blood Pressure: 120/80</div>
//       <div className="hw-card">Heart Rate: 72 bpm</div>
//       <div className="hw-card">Sugar Level: 98 mg/dL</div>
//     </>
//   );
// }

import PageContainer from "../components/PageContainer";

export default function Vitals() {
  return (
    <PageContainer title="Vitals Overview">
      <div className="card">Blood Pressure: 120/80</div>
      <div className="card">Heart Rate: 72 bpm</div>
      <div className="card">Sugar Level: 98 mg/dL</div>
    </PageContainer>
  );
}
