// export default function Dashboard() {
//   return (
//     <>
//     <div className="hw-container">
//       <div className="hw-dashboard-title">Dashboard</div>
// <div className="hw-dashboard-subtitle">
//   Overview of your health records
// </div>

//       <div className="hw-dashboard-grid">
//         <div className="hw-dashboard-card">
//           <div className="hw-dashboard-icon"></div>
//           <h4>Total Reports</h4>
//           <p>View all uploaded medical documents</p>
//         </div>

//         <div className="hw-dashboard-card">
//           <div className="hw-dashboard-icon"></div>
//           <h4>Vitals Tracking</h4>
//           <p>Monitor BP, heart rate, sugar</p>
//         </div>

//         <div className="hw-dashboard-card">
//           <div className="hw-dashboard-icon"></div>
//           <h4>Health Insights</h4>
//           <p>Track trends over time</p>
//         </div>
//       </div>

//       <div className="hw-recent">
//         <h3>Recent Activity</h3>

//         <div className="hw-recent-item">
//           <span>Blood Test Report Uploaded</span>
//           <span className="hw-recent-date">12 Dec 2024</span>
//         </div>

//         <div className="hw-recent-item">
//           <span>BP Reading Added</span>
//           <span className="hw-recent-date">08 Dec 2024</span>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

import PageContainer from "../components/PageContainer";

export default function Dashboard() {
  return (
    <PageContainer
      title="Dashboard"
      subtitle="Overview of your health records"
    >
      <div className="grid">
        <div className="card">
          <strong>Total Reports</strong>
          <p>View all uploaded documents</p>
        </div>

        <div className="card">
          <strong>Vitals Tracking</strong>
          <p>Monitor BP, sugar, heart rate</p>
        </div>

        <div className="card">
          <strong>Health Insights</strong>
          <p>Track health trends over time</p>
        </div>
      </div>

      <h3 className="section-title">Recent Activity</h3>

      <div className="card">
        <p>Blood Test Uploaded</p>
        <small>12 Dec 2024</small>
      </div>
    </PageContainer>
  );
}

