import React, { useEffect, useState } from "react";
import Counter from "./counter";

const Home = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);

	
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<Counter count={count} />
		</div>
	);
};

export default Home;
