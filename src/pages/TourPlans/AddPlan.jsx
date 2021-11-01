import React, { useRef } from "react";

const AddPlan = () => {
    const titleRef = useRef();
    const costRef = useRef();
    const timeRef = useRef();
    const descRef = useRef();
    const imageRef = useRef();



    const handlePlanAddition = (evnt) => {
        const title = titleRef.current.value;
        const cost = costRef.current.value;
        const duration = timeRef.current.value;
        const description = descRef.current.value;
        const image = imageRef.current.value;
        const data = {title, cost, duration, description, image};
        console.log('--------------------------',data);
        fetch('https://shrieking-spider-08076.herokuapp.com/add-plan', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            alert(data.message);
        })
        evnt.preventDefault();
    }
    return (
        <main>
            <section className="container w-11/12 mx-auto my-16">
                <h2 className="text-4xl pb-12">Create a New Plan</h2>
                <form class="" onSubmit={handlePlanAddition }>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Plan Title
                            </label>
                            <input
                                ref={titleRef}
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"
                                placeholder="Write plan title"
                                required />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Plan Cost
                            </label>
                            <input
                                ref={costRef}
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Cost in Taka" required />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Plan Longivity
                            </label>
                            <input
                                ref={timeRef}
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="3 days 2 nights" required />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Image
                            </label>
                            <input
                                ref={imageRef}
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" placeholder="Image URL ; must be plan related" required />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Description
                            </label>
                            <textarea
                                ref={descRef}
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                rows="4"
                                cols="50">
                            </textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <input
                            className="md:py-2 py-1 md:px-16 px-5 bg-red-400 rounded"
                            type="submit"
                            value="Add Plan"
                        />
                    </div>

                </form>
            </section>
        </main>
    );
};

export default AddPlan;