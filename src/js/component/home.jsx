import React, { useEffect, useState } from "react";
import Counter from "./counter";

const Home = () => {
	const [count, setCount] = useState(0);

	setInterval(() => {
		setCount(count + 1);
		console.log(count)
	}, 1000);



	return (
		<div>
			<Counter count={count}/>
		</div>
		
	);
};

export default Home;
