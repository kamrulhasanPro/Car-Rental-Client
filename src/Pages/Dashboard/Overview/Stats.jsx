import React, { useEffect, useState } from "react";
import StatCard from "../../../Components/Card/StatCard";
import { FaCar, FaClipboardList } from "react-icons/fa6";
import { useAxiosSecure } from "../../../api/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const Stats = () => {
  const [statList, setStatList] = useState();
  const axiosSecure = useAxiosSecure();
  const getStats = async (email) => {
    const promise = await axiosSecure.get(`/stats/${email}`);
    const res = await promise.data;
    const data = await res;
    console.log(data);
    return data;
  };
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure.get(`/stats/${user?.email}`).then((res) => {
      setStatList(res.data);
    });
    // console.log(result);
  }, [user, axiosSecure]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <StatCard
        title={"My Bookings"}
        subtitle={""}
        value={statList?.myBookingStats}
        icon={<FaClipboardList />}
      />
      <StatCard
        title={"My Cars"}
        subtitle={""}
        value={statList?.myCars}
        icon={<FaCar />}
      />
    </div>
  );
};

export default Stats;
