import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function Task() {
  return (
    <Accordion>

        <Accordion.Item eventKey="0">
          <Accordion.Header>HNG Task 0 - Profile Card & Blog</Accordion.Header>
          <Accordion.Body>

            <h3>Task Description</h3>

            <p>
              - Create a simple profile card, add a profile picture, display your full name, 
              display your current job title or desired job title, 
              include a short bio about yourself (50-100 words), display your current city and country, 
              add your professional email address, 
              add links to your professional social profiles, 
              display the current time in UTC format
            </p>

            <p>- Write a Blog Post about your journey to becoming a Frontend Developer. Task Requirements Write a blog post on:</p>
            <ul>
              <li>Why I Want to Be a Front-End Developer and How HNG Will Help Me Achieve My Goals</li>
              <li>The blog should contain</li>
              <li>Your motivation for becoming a frontend developer</li>
              <li>How HNG will help you grow in the field</li>
              <li>Your goals for the internship and how you plan to achieve them</li>
              <li>Include and properly cite all reference links listed below</li>
            </ul>

            <p>HTML, CSS, and Vanilla JavaScript</p>

            <h6>Score: 10</h6>

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>HNG Task 1 - Color Game</Accordion.Header>
          <Accordion.Body>
            <h3>Task Description</h3>
            <p>
              HTML, CSS, and Vanilla JavaScript or React Game Requirements, create a simple color game.
              Display a box with a randomly selected color, this will be the target color for the game, 
              display 6 color buttons, each representing a potential guess for the target color.
              Display a message explaining the goal of the game (e.g., “Guess the correct color!“).
              After each guess, display whether the guess is correct or wrong.
              Display a score counter that increments for each correct guess.
              Include a button to reset the game and start a new round.
            </p>
            <h6>Score: 10</h6>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>HNG Task 2 - Conference Ticket Generator</Accordion.Header>
          <Accordion.Body>
            <h3>Task Description</h3>
            <p>
              You will build and host a Conference Ticket Generator using React or any React Framework (e.g., Next.js, etc.). 
              The ticket generator will allow users to fill out a form with their details, perform validations on the inputs, 
              and generate a ticket upon successful submission.

              Note: Only React or any React Framework is allowed.

              The ticket should contain; Text input for the user's full name.
              Email input field, users should upload their avatar image and store it using Cloudinary or any image hosting,
              the form should only accept and submit the image URL, button to submit the form.
            </p>
            <h6>Score: 3</h6>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>HNG Task 3 - AI Powered Text Processor Interface</Accordion.Header>
          <Accordion.Body>
            <>
              <h3>Task Description</h3>
              <p>
                Using HTML, CSS and Js/Ts, React or any React Framework(eg. Next etc), 
                develop build and host an AI-Powered Text Processing Interface using Chrome's AI APIs.
                This application will allow users to input text and utilize features such as summarization, 
                translation, and language detection. Users should be able to interact with a clean, 
                responsive UI that ensures accessibility and provides meaningful feedback for errors.
              </p>
              
              <h5>Requirements:</h5>

              <h6>Summary: </h6>
              The UI should look like a chat interface with a textarea field in the bottom of the page and the output field should be the the area above. 
              When a user inputs a text and send, The text should Immediately render in the output area just like a normal chat window. 
              Use the Language detector API to detect the text language and render it below the output text. Right below the text,
              Summarize: If the text is more than 150 characters, render a button below the text that reads "Summarize". Make use of the Summarizer API to achieve this. 
              Translate: Render a simple select option field to switch between the languages listed below and a button that reads "Translate" to 
              translate the output text to the selected language. Use the Translator API.

              English(en),
              Portuguese (pt),
              Spanish (es),
              Russian (ru),
              Turkish (tr),
              French (fr)
              Render the translated or(and) summarized output below the initial output text. NOTE: For summary, render the Summarize button only for output texts that are in English language.
              </>
              <h6>Score: 4</h6>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>HNG Task 4 - Kaban Board</Accordion.Header>
          <Accordion.Body>
            <h3>Task Description</h3>
            <p>
              Task - Design a Simple Kanban Board
              Using Figma design tool, design a simple kanban board with the following design requirements and Minimum components. 
            </p>

            <p>  
              Note: check the reading material for mood boards and design inspiration.
              
              Design Requirements:
              Desktop view (1440px width). Mobile view (375px width).
              
              Use a simple color palette (max 5 colors). Include empty states. Show hover/active states. Use system fonts only.
              
              Minimum Components: Logo.
              Page header and footer.
              Board column. Task card. Add card button. Column header. Simple avatar. Basic icons (add, move, edit).  
            </p>
            <h6>Score: Grading</h6>
          </Accordion.Body>
        </Accordion.Item>

    </Accordion>
  )
}
