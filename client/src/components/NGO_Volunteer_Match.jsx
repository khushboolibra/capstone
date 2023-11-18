import axios from "axios";
import React, { useState } from "react";
import { AWS_URL } from "../const";

const NGO_Volunteer_Match = () => {
    const [ngoToVolData, setNgoToVolData] = useState([]);
    const [volToNgoData, setVolToNgoData] = useState([]);

    const fetchMatchesHandler = () => {
        axios.get(AWS_URL + "/find/ngo-vol").then((response) => {
            const data = response.data;
            setNgoToVolData(data);
        });

        axios.get(AWS_URL + "/find/vol-ngo").then((response) => {
            const data = response.data;
            setVolToNgoData(data);
            console.log(data);
        });
    };

    return (
        <div>
            <div>
                <button 
                    className="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    type="button" onClick={fetchMatchesHandler}>
                    Fetch Matches
                </button>
            </div>
            {/* Volunteers of an NGO Section */}
            <section className="py-11">
                <h2 className="text-4xl font-extrabold dark:text-blue">Volunteers of an NGO</h2>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">NGO Name</th>
                                <th scope="col" className="px-6 py-3">Field of Work</th>
                                <th scope="col" className="px-6 py-3">Day</th>
                                <th scope="col" className="px-6 py-3">Volunteers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ngoToVolData.map((ngo, index) => {
                                return ngo.volunteers.length ? (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        key={index}>
                                        <td className="px-6 py-4">{ngo.name}</td>
                                        <td className="px-6 py-4">{ngo.fieldOfInterest}</td>
                                        <td className="px-6 py-4">{ngo.volunteerDays}</td>
                                        <td className="px-6 py-4">
                                            {ngo.volunteers.map((volunteer) => {
                                                return (
                                                    <div className="flex flex-row justify-between">
                                                        <span>
                                                            {volunteer.name}
                                                        </span>
                                                        <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                            {volunteer.email}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </td>
                                    </tr>
                                ) : null;
                            })}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* NGOs for a Volunteer Section */}
            <section>
                <h2 className="text-4xl font-extrabold dark:text-blue">NGOs for a Volunteer</h2>
                <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Volunteer Name</th>
                            <th scope="col" className="px-6 py-3">Field of Work</th>
                            <th scope="col" className="px-6 py-3">Day</th>
                            <th scope="col" className="px-6 py-3">NGOs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {volToNgoData.map((volunteer, index) => {
                            return volunteer.ngos.length ? (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    key={index}>
                                    <td className="px-6 py-4">{volunteer.name}</td>
                                    <td className="px-6 py-4">{volunteer.fieldOfInterest}</td>
                                    <td className="px-6 py-4">{volunteer.volunteerDays}</td>
                                    <td className="px-6 py-4">
                                        {volunteer.ngos.map((ngo) => {
                                            return (
                                                <div className="flex flex-row justify-between">
                                                    <span>{ngo.name}</span>
                                                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{ngo.email}</span>
                                                </div>
                                            );
                                        })}
                                    </td>
                                </tr>
                            ) : null;
                        })}
                    </tbody>
                </table>
                </div>
                
            </section>
        </div>
    );
};

export default NGO_Volunteer_Match;
