"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PenSquare,
  User,
  Github,
  Link as LinkIcon,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

// Mock data - Replace with real data later
const mockProposals = [
  {
    id: 1,
    title: "Full Stack Web Development Project",
    client: "Tech Solutions Inc.",
    status: "In Review",
    submitted: "2 hours ago",
  },
  {
    id: 2,
    title: "React Native Mobile App",
    client: "StartUp Co.",
    status: "Draft",
    submitted: "1 day ago",
  },
];

const profileSections = [
  { name: "About Me", icon: User, completed: false },
  { name: "Portfolio Link", icon: LinkIcon, completed: false },
  { name: "GitHub Profile", icon: Github, completed: false },
];

export default function DashboardPage() {
  const completedSections = profileSections.filter(
    (section) => section.completed
  ).length;
  const completionPercentage =
    (completedSections / profileSections.length) * 100;

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header with New Proposal Button */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-[#1f4160]">Dashboard</h1>
          <Link href="/proposals/new">
            <Button className="bg-[#14A800] hover:bg-[#3C8224] text-white rounded-full">
              <PenSquare className="w-4 h-4 mr-2" />
              Write New Proposal
            </Button>
          </Link>
        </div>

        {/* Profile Completion Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-[#1f4160]">
                Complete Your Profile
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Help AI generate better proposals by completing your profile
              </p>
            </div>
            <Link href="/settings">
              <Button
                variant="outline"
                className="border-[#14A800] text-[#14A800] hover:bg-[#f2f7f2]"
              >
                Update Profile
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {profileSections.map((section) => (
              <div
                key={section.name}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="w-5 h-5 text-gray-500" />
                  <span className="font-medium">{section.name}</span>
                </div>
                {section.completed ? (
                  <span className="text-[#14A800]">Completed</span>
                ) : (
                  <span className="text-gray-400">Not completed</span>
                )}
              </div>
            ))}
          </div>
          {completionPercentage < 100 && (
            <div className="flex items-center mt-4 text-sm text-amber-600">
              <AlertCircle className="w-4 h-4 mr-2" />
              Complete your profile to help AI generate more personalized
              proposals
            </div>
          )}
        </Card>

        {/* Recent Proposals */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#1f4160]">
              Recent Proposals
            </h2>
            <Link href="/proposals">
              <Button
                variant="ghost"
                className="text-[#14A800] hover:text-[#3C8224]"
              >
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {mockProposals.map((proposal) => (
              <div
                key={proposal.id}
                className="p-4 rounded-lg border border-gray-100 hover:border-[#14A800] transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#1f4160]">
                      {proposal.title}
                    </h3>
                    <p className="text-sm text-gray-500">{proposal.client}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      proposal.status === "In Review"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {proposal.status}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-gray-500">
                    {proposal.submitted}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
