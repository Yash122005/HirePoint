import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Heart, MapPin, MapPinIcon, Trash2Icon } from "lucide-react";
import useFetch from "../hooks/use-fetch";
import { deleteJob, saveJob } from "@/api/apiJobs";

const JobCard = ({ job, isMyJob, savedInit, onSavedJob = () => {} }) => {
   const [saved, setSaved] = useState(savedInit);
  const { fn: fnSavedJob, data: savedJob, loading: loadingSavedJob } = useFetch(saveJob, {alreadySaved: saved,});

  const { user } = useUser();
  // console.log(job);
  

    const handleSaveJob = async () => {
    await fnSavedJob({
      user_id: user.id,
      job_id: job.id,
    });
    onJobAction();
  };
    useEffect(() => {
    if (savedJob !== undefined) setSaved(savedJob?.length > 0);
  }, [savedJob]);

  return (
    <div>
      <Card className="h-full backdrop-blur-md bg-gradient-to-br from-white/15 via-white/10 to-white/5 border border-white/30 shadow-2xl hover:shadow-blue-500/20 hover:border-white/50 transition-all duration-300 flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="flex justify-between font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            {job.title}

            {!isMyJob && (
              <Trash2Icon
                size={18}
                fill="red"
                className="w-5 h-5 inline ml-2 cursor-pointer text-red-400 hover:text-red-300 transition-colors"
              />
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between ">
            {job.company && (
              <img
                src={job.company.logo_url}
                alt={job.company.name}
                className="h-8 mb-2 opacity-80 hover:opacity-100 transition-opacity"
              />
            )}
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <MapPinIcon size={15} />
              <span className="font-normal">{job.location}</span>
            </div>
          </div>
          <hr className="border-white/20" />
          <p className="mt-2 text-gray-100">{job.description}</p>
        </CardContent>
        <CardFooter>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center justify-between mb-2 gap-3">
              <Link to={`/job/${job.id}`} className="flex-1">
                <Button
                  variant="glass"
                  className="w-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 hover:from-blue-500/50 hover:to-purple-500/50 text-white border border-blue-300/30 transition-all"
                >
                  More Details
                </Button>
              </Link>
               {!isMyJob && (
          <Button
            variant="outline"
            className="w-15"
            onClick={handleSaveJob}
            disabled={loadingSavedJob}
          >
            {saved ? (
              <Heart size={20} fill="red" stroke="red" />
            ) : (
              <Heart size={20} />
            )}
          </Button>
        )}
            </div>

            <p className="text-sm text-gray-300">
              Posted by: {user?.firstName} {user?.lastName}
            </p>
          </div>
         
        </CardFooter>
      </Card>
    </div>
  );
};

export default JobCard;
