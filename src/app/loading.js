import React from "react";

const loading = () => {
	return (
		<div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
			<img src="..\loading-ring.gif" alt="loading...." />
		</div>
	);
};

export default loading;
