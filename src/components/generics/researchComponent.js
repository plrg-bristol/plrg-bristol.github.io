import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import Button from "../generics/buttonComponent";

import { createResearchDataUrl } from "../../research_data";
import Spinner from "../spinner";
import { List, ListItem } from "../list";
import HorizontalComponent from "./horizontalComponent";

const getIdentifier = (parent) => {
  let identifier = null;
  if (
    "identifier" in parent &&
    parent.identifier &&
    Array.isArray(parent.identifier) &&
    parent.identifier.length > 0 &&
    "id" in parent.identifier[0] &&
    parent.identifier[0].id &&
    "type" in parent.identifier[0] &&
    parent.identifier[0].type === "doi" // (currently only want dois, not issns etc.)
  ) {
    identifier = `${parent.identifier[0].id}`;
  }

  return identifier;
};

const renderRecord = (record) => {
  const sections = [];

  let date = "";
  // Date
  if ("year" in record && record.year) {
    date = `${record.year}`;
    // Just need year currently:
    // if ("month" in record && record.month) {
    //   const month = record.month > 9 ? `${record.month}` : `0${record.month}`;
    //   date = `${month}-${date}`;
    //   if ("day" in record && record.day) {
    //     const day = record.day > 9 ? `${record.day}` : `0${record.day}`;
    //     date = `${day}-${date}`;
    //   }
    // }
  }

  // Authors:
  if ("author" in record) {
    let author_names = record.author.map((authorInfo) => {
      if (
        "firstInitial" in authorInfo &&
        "secondname" in authorInfo &&
        authorInfo.firstInitial &&
        authorInfo.secondname
      ) {
        return `${authorInfo.secondname} ${authorInfo.firstInitial}`;
      } else if ("name" in authorInfo && authorInfo.name) {
        return authorInfo.name;
      } else if (
        "firstname" in authorInfo &&
        authorInfo.firstname &&
        "lastname" in authorInfo &&
        authorInfo.lastname
      ) {
        return `${authorInfo.firstname} ${authorInfo.lastname}`;
      }
      return null;
    });
    // Remove nulls:
    author_names = author_names.filter((name) => name);

    // If valid authors, add the authors section:
    if (author_names.length > 0)
      sections.push(
        <>
          {date}, <b>{author_names.join(", ") + " ."}</b>
        </>
      );
  }

  // Title:
  if ("title" in record && record.title) {
    let title = record.title;
    if ("subTitle" in record && record.subTitle) {
      title = `${title}: ${record.subTitle}`;
    }
    if (
      "link" in record &&
      record.link &&
      Array.isArray(record.link) &&
      record.link.length > 0
    ) {
      if ("url" in record.link[0] && record.link[0].url) {
        title = (
          <a rel="noreferrer" target="_blank" href={record.link[0].url}>
            {title}
          </a>
        );
      }
    }
    const identifier = getIdentifier(record);
    sections.push(
      <p className="mb-0">
        {title}
        {identifier ? (
          <>
            <br />
            {identifier}
          </>
        ) : null}
      </p>
    );
  }

  // Book:
  if (
    "book" in record &&
    record.book &&
    "title" in record.book &&
    record.book.title
  ) {
    sections.push(
      <>
        <b>Book:</b>
        <br />
        {record.book.title}
      </>
    );

    // This was originally also in there:
    // const identifier = getIdentifier(record.book);
    // {"editor" in record.book && record.book.editor ? (
    //   <>
    //     <br />
    //     {record.book.editor}
    //   </>
    // ) : null}
    // {/* {"publicationSeries" in record.book && record.book.publicationSeries ? (
    //   <>
    //     <br />
    //     {record.book.publicationSeries}
    //   </>
    // ) : null} */}
    // {identifier ? (
    //   <>
    //     <br />
    //     {identifier}
    //   </>
    // ) : null}
  } else if (
    // Journal:
    "journal" in record &&
    record.journal &&
    "name" in record.journal &&
    record.journal.name
  ) {
    // const identifier = getIdentifier(record.journal);
    sections.push(
      <>
        <b>Journal:</b>
        <br />
        {record.journal.name}
        {/* {record.journal.volume ? <> - {record.journal.volume}</> : null}
        {record.journal.issue ? <> - {record.journal.issue}</> : null}
        {identifier ? (
          <>
            <br />
            {identifier}
          </>
        ) : null} */}
      </>
    );
  } else {
    sections.push(<p>N/A</p>);
  }

  return (
    <HorizontalComponent colWidthOverrides={[3, 6, 3]} components={sections} />
  );
};

const ResearchComponent = ({ keywords, maxNum = null, year = null }) => {
  const [pageNum, setPageNum] = useState(1);
  const [lastFetchedPage, setLastFetchedPage] = useState(1);
  const [records, setRecords] = useState([]);

  const { isFetched, isFetching, error, data, refetch } = useQuery(
    ["repoData"],
    () => {
      const url = createResearchDataUrl(keywords, {
        maxNum,
        year,
        pageNum,
      });
      return axios.get(url).then((res) => res.data);
    }
  );

  // Add any new records to the existing records:
  useEffect(() => {
    if (!isFetching && data) {
      setRecords([...records, ...data.records]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  // Run refetch after clicking load more:
  useEffect(() => {
    if (pageNum !== lastFetchedPage) {
      refetch();
      setLastFetchedPage(pageNum);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum, lastFetchedPage]);

  if (isFetching && records.length === 0) {
    return (
      <div
        style={{ height: 100 }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner />
      </div>
    );
  }

  if (error || !("records" in data)) return "Not available. Try again later.";

  let buttonContent = "Load More Publications";
  let disabled = false;
  if (isFetching) buttonContent = <Spinner />;
  else if (isFetched && data.records.length === 0) {
    buttonContent = "No more publications";
    disabled = true;
  }

  return (
    <>
      <List>
        {records.map((record) => (
          <ListItem key={record.pureId}>{renderRecord(record)}</ListItem>
        ))}
      </List>
      <div className="text-center">
        <Button
          disabled={disabled}
          className="my-3"
          onClick={() => setPageNum(pageNum + 1)}
        >
          {buttonContent}
        </Button>
      </div>
    </>
  );
};

ResearchComponent.propTypes = {
  keywords: PropTypes.string.isRequired,
  maxNum: PropTypes.number,
  year: PropTypes.number,
};

export default ResearchComponent;
