import {
  Input,
  Stack,
  FormLabel,
  Select,
  Button,
  Radio,
  RadioGroup,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const url = "http://localhost:3000"; // backend is running on port 3000

function Home() {
  const [formData, setFormData] = useState({
    Email: " ",
    Name: " ",
    Age: " ",
    selectedValue: " ",
    highEducation: " ",
    studyCourse: " ",
    experience: " ",
    admitted: " ",
    program: " ",
    country: " ",
    goals: " ",
    Listening: " ",
    Reading: " ",
    Speaking: " ",
    writing: " ",
    tuition: " ",
    gic: " ",
    pay: " ",
  });

  const handleRadioChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "radio") {
      handleRadioChange(name, value);
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post(`${url}/sentmail`, formData);
      console.log(formData);
    } catch (error) {
      console.error("Couldn't send mail", error.message);
      alert(error.message);
    }
  };

  const handleClear = () => {
    setFormData({
      Email: "",
      Name: "",
      Age: "",
      selectedValue: "",
      highEducation: "",
      studyCourse: "",
      experience: "",
      admitted: "",
      program: "",
      country: "",
      goals: "",
      Listening: "",
      Reading: "",
      Speaking: "",
      writing: "",
      tuition: "",
      gic: "",
      pay: "",
    });
  };

  return (
    <>
    
    <div className="m-3">
        <p className=" font-seriff mb-5">
         <span className=" font-bold text-2xl"> We are excited to get to know you better! <br /> </span> Please take a moment to fill in
          your details below. Your information will be kept confidential and used
          solely for the purpose you provide it. Your participation is essential
          for us to tailor our services to your needs and provide you with the
          best possible experience.
        </p>
    </div>
      <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          {/* email */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="Email">Email</FormLabel>
            <Input
              id="Email"
              name="Email"
              placeholder="Enter your Email"
              size="lg"
              value={formData.Email}
              onChange={handleChange}
            />
            {formData.Email === "" && (
              <p className="text-red-500">Email is required</p>
            )}
          </div>
          {/* name */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="Name">Name</FormLabel>
            <Input
              id="Name"
              name="Name"
              placeholder="Enter your name"
              size="lg"
              value={formData.Name}
              onChange={handleChange}
            />
            {formData.Name === "" && (
              <p className="text-red-500">Name is required</p>
            )}
          </div>

          {/* Age */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="Age">Age</FormLabel>
            <Input
              id="Age"
              name="Age"
              type="number"
              placeholder="Enter your age"
              size="lg"
              value={formData.Age}
              onChange={handleChange}
            />
            {formData.Age === "" && (
              <p className="text-red-500">Age is required</p>
            )}
          </div>
          {/* Highest Level of Education */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="selectedValue">
              Highest Level of Education
            </FormLabel>
            <Select
              id="selectedValue"
              name="selectedValue"
              placeholder="Select option"
              value={formData.selectedValue}
              onChange={handleChange}
            >
              <option value="Grade 12">Grade 12</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelors Degree">Bachelors Degree</option>
              <option value="Masters Degree">Masters Degree</option>
              <option value="PhD">PhD</option>
            </Select>
            {formData.selectedValue === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
          {/* Institute where you completed your highest level of education */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="highEducation">
              Institute where you completed your highest level of education
            </FormLabel>
            <Input
              id="highEducation"
              name="highEducation"
              placeholder="your answer"
              size="lg"
              value={formData.highEducation}
              onChange={handleChange}
            />
            {formData.highEducation === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
          {/* What did you study */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="studyCourse">What did you study</FormLabel>
            <Input
              id="studyCourse"
              name="studyCourse"
              placeholder="your answer"
              size="lg"
              value={formData.studyCourse}
              onChange={handleChange}
            />
            {formData.studyCourse === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
          {/* Relevant work experience */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="experience">
              Do you have any relevant work experience?
            </FormLabel>
            <Input
              id="experience"
              name="experience"
              placeholder="your answer"
              size="lg"
              value={formData.experience}
              onChange={handleChange}
            />
            {formData.experience === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
          {/* Institute admitted to in Canada */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="admitted">
              What institute did you get admitted to in Canada?
            </FormLabel>
            <Input
              id="admitted"
              name="admitted"
              placeholder="your answer"
              size="lg"
              value={formData.admitted}
              onChange={handleChange}
            />
            {formData.admitted === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
          {/* Program of study in Canada */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="program">
              What is your program of study in Canada?
            </FormLabel>
            <Input
              id="program"
              name="program"
              placeholder="your answer"
              size="lg"
              value={formData.program}
              onChange={handleChange}
            />
            {formData.program === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
          {/* Country applying from */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="country">
              Which country are you applying from?
            </FormLabel>
            <Input
              id="country"
              name="country"
              placeholder="your answer"
              size="lg"
              value={formData.country}
              onChange={handleChange}
            />
            {formData.country === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
          {/* Future goals */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="goals">What are your future goals?</FormLabel>
            <Input
              id="goals"
              name="goals"
              placeholder="your answer"
              size="lg"
              value={formData.goals}
              onChange={handleChange}
            />
            {formData.goals === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
          {/* English Scores */}
          <div>
            <FormLabel htmlFor="englishScores">English Scores</FormLabel>
            <div className="flex justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
              <div>
                <FormLabel htmlFor="Listening">Listening</FormLabel>
                <Input
                  id="Listening"
                  name="Listening"
                  placeholder="your answer"
                  size="lg"
                  value={formData.Listening}
                  onChange={handleChange}
                />
              </div>
              <div>
                <FormLabel htmlFor="Reading">Reading</FormLabel>
                <Input
                  id="Reading"
                  name="Reading"
                  placeholder="your answer"
                  size="lg"
                  value={formData.Reading}
                  onChange={handleChange}
                />
              </div>
              <div>
                <FormLabel htmlFor="Speaking">Speaking</FormLabel>
                <Input
                  id="Speaking"
                  name="Speaking"
                  placeholder="your answer"
                  size="lg"
                  value={formData.Speaking}
                  onChange={handleChange}
                />
              </div>
              <div>
                <FormLabel htmlFor="writing">Writing</FormLabel>
                <Input
                  id="writing"
                  name="writing"
                  placeholder="your answer"
                  size="lg"
                  value={formData.writing}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* Did you pay your first year tuition? */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="tuition">
              Did you pay your first year tuition?
            </FormLabel>
            <RadioGroup
              name="tuition"
              value={formData.tuition}
              onChange={(value) =>
                handleChange({
                  target: { name: "tuition", value, type: "radio" },
                })
              }
            >
              <Stack direction="col">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Stack>
            </RadioGroup>
            {formData.tuition === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
          {/* Did you do a GIC? */}
          <div className="justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="gic">Did you do a GIC?</FormLabel>
            <RadioGroup
              name="gic"
              value={formData.gic}
              onChange={(value) =>
                handleChange({ target: { name: "gic", value, type: "radio" } })
              }
            >
              <Stack direction="col">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Stack>
            </RadioGroup>
            {formData.gic === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>

          {/* How much did you pay towards GIC? */}
          <div className=" justify-between border p-5 rounded-md shadow-md hover:shadow-lg transition-all">
            <FormLabel htmlFor="pay">
              How much did you pay towards GIC?
            </FormLabel>
            <Input
              id="pay"
              name="pay"
              type="number"
              placeholder="your answer"
              size="lg"
              value={formData.pay}
              onChange={handleChange}
            />
            {formData.pay === "" && (
              <p className="text-red-500">Field is required</p>
            )}
          </div>
        </Stack>

        <ButtonGroup variant="outline" spacing="6" className=" mt-5 p-3">
          <Button type="submit" colorScheme="blue" >
            Submit
          </Button>
          <Button onClick={handleClear}>Clear</Button>
        </ButtonGroup>
      </form>
    </>
  );
}

export default Home;
