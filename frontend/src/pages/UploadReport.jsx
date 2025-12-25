// export default function UploadReport() {
//   return (
//     <>
//       <h2>Upload Report</h2>
//       <p style={{ marginBottom: "20px", color: "#6b7280" }}>
//         Upload your medical documents securely.
//       </p>

//       <input type="file" />
//     </>
//   );
// }

import PageContainer from "../components/PageContainer";

export default function UploadReport() {
  return (
    <PageContainer
      title="Upload Report"
      subtitle="Upload your medical documents securely"
    >
      <div className="card">
        <input type="file" />
      </div>
    </PageContainer>
  );
}

