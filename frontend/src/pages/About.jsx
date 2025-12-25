// export default function About() {
//   return (
//     <>
//       <h2 className="hw-about-title">About Health Wallet</h2>
// <p className="hw-about-desc">
//   Health Wallet helps users store and manage medical records securely.
// </p>


//       <div className="hw-card">
//         <strong>Secure & Private</strong>
//         <p>
//           Your health data is protected using authentication and access control,
//           ensuring only authorized users can view sensitive information.
//         </p>
//       </div>

//       <div className="hw-card">
//         <strong>Track Health Vitals</strong>
//         <p>
//           Monitor vitals such as blood pressure, heart rate, and sugar levels
//           over time to stay informed about your health.
//         </p>
//       </div>

//       <div className="hw-card">
//         <strong> Store Medical Reports</strong>
//         <p>
//           Upload and organize medical reports like blood tests, X-rays, and
//           prescriptions in one secure place.
//         </p>
//       </div>

//       <div className="hw-card">
//         <strong> Easy Sharing</strong>
//         <p>
//           Share selected medical reports with doctors or family members with
//           read-only access.
//         </p>
//       </div>
//     </>
//   );
// }

import PageContainer from "../components/PageContainer";

export default function About() {
  return (
    <PageContainer
      title="About Health Wallet"
      subtitle="Health Wallet helps users store and manage medical records securely."
    >
      <div className="card">
        <strong>Secure & Private</strong>
        <p>Your health data is protected using authentication and access control.</p>
      </div>

      <div className="card">
        <strong>Track Health Vitals</strong>
        <p>Monitor BP, heart rate, sugar levels over time.</p>
      </div>

      <div className="card">
        <strong>Store Medical Reports</strong>
        <p>Upload and organize medical documents in one place.</p>
      </div>

      <div className="card">
        <strong>Easy Sharing</strong>
        <p>Share reports securely with doctors and family.</p>
      </div>
    </PageContainer>
  );
}
