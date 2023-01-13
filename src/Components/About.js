import React from "react";

export default function About(props) {
  return (
    <div className="container my-5">
      <div className="accordion" id="accordionExample" style={props.style}>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={props.style}
            >
             <strong>What is TxtUtils?</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is a tool that allows you to analyse a text by counting the
              number of sentences, words and characters present. It also
              provides statistical information on the repetition of phrases and
              keywords. Our online text analyser / word counter is easy to use
              and free of charge.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.style}
            >
            <strong>Who can use it?</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is aimed at any type of writer (author, journalist, student,
              etc.) who writes texts that are limited to a minimum and/or
              maximum number of words. It helps writers to identify unnecessary
              repetitions of words and promotes better harmonisation of the
              terminology being used. In addition, translators can easily
              calculate the price of a text based on their word rates. This tool
              is also intended for teachers, who can use it to assess the level
              of difficulty and skill required to understand a text. They can
              also easily extract a list of vocabulary to study. It is also
              useful for web page editors to optimise the content of a page by
              knowing in one click which expressions and keywords are the most
              used.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.style}
            >
            <strong>How do I use it?</strong>  
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our text analyzer / word counter is easy to use. Simply copy/paste
              the text or type it into the input box, select the language for
              optimisation (English, Spanish, French or Italian) and then click
              on Go. If a language for optimisation is selected, a filter that
              blocks certain short "irrelevant" words is applied to the word
              repetition analysis. If the language you are using is not in the
              drop-down list, it is better to select "[none]". It is possible to
              evaluate texts in all languages with this analysis tool.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
