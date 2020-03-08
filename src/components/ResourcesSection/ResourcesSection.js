import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectResources } from "../../store/resources/selectors";
import { selectLoggedinUser } from "../../store/selectors";

import "./ResourcesSection.css";
import { toggleFavorite } from "../../store/developers/actions";

export default function ResourcesSection() {
  const dispatch = useDispatch();
  const me = useSelector(selectLoggedinUser);
  const resources = useSelector(selectResources);

  return (
    <div className="ResourcesSection">
      <h2>All resources</h2>
      <div className="resources">
        {resources.map(resource => {
          const toggle = () => {
            dispatch(toggleFavorite(me.id, resource.id));
          };

          return (
            <div key={resource.id} className="resource">
              <div className="title">
                {me && (
                  <button onClick={toggle}>
                    {me.favorites.includes(resource.id) ? "♥" : "♡"}
                  </button>
                )}{" "}
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
