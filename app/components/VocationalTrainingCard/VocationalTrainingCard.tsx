import React from "react";
import "./VocationalTrainingCard.css";
interface VocationalTrainingCardProps {
  title: string;
  developmentSkils: Array<String>;
}

const VocationalTrainingCard: React.FC<VocationalTrainingCardProps> = ({
  title,
  developmentSkils,
}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <ol>
        {developmentSkils.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ol>
    </div>
  );
};

export default VocationalTrainingCard;
