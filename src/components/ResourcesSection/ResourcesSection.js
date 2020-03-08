import React from "react";
import { useSelector } from "react-redux";
import { selectResources } from "../../store/resources/selectors";

import "./ResourcesSection.css";

export default function ResourcesSection() {
  const resources = useSelector(selectResources);

  return (
    <div className="ResourcesSection">
      <h2>All resources</h2>
      <div className="resources">
        {resources.map(resource => {
          return (
            <div key={resource.id} className="resource">
              <div className="title">
                <strong>{resource.name}</strong> (<em>{resource.type}</em>)
                &mdash; Find out more at{" "}
                <a href={resource.url}>{resource.url}</a>
              </div>
              <div className="meta">
                {resource.tags.map((tag, i) => {
                  return (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
