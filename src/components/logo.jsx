import { Link } from "react-router-dom";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  svg {
    transition: 200ms ease;
  }
  &:hover svg {
    transform: rotate(-20deg);
  }
`;

const Logo = () => {
  return (
    <Link to="/">
      <LogoBox>
        <svg
          width="30"
          height="30"
          viewBox="0 0 144 187"
          fill={useColorModeValue("#1a202c", "#ffffffeb")}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.0781 75.7969C43.2969 74.5781 38.6562 73.9688 34.1562 73.9688C23.0938 73.9688 13.0156 77.7188 3.92188 85.2188C3.96875 84.75 3.80469 83.5312 3.42969 81.5625C3.10156 79.5469 2.98438 78.3047 3.07812 77.8359C15.4062 67.7109 28.8125 59.7891 43.2969 54.0703C62.2344 59.6953 79.6484 67.4297 95.5391 77.2734C94.5078 78.9609 93.2188 80.4375 91.6719 81.7031C90.125 82.9688 88.8359 84.4219 87.8047 86.0625C87.4766 86.9531 87.3125 88.2188 87.3125 89.8594V93.6562L87.8047 131.344C87.9453 134.391 88.5078 136.289 89.4922 137.039L96.5938 142.875L84.2188 159.82L68.1172 146.18C69.1484 138.82 69.6641 129.188 69.6641 117.281H43.3672C41.5859 133.875 36.5 147.938 28.1094 159.469C19.7656 171 12.2422 180.023 5.53906 186.539C3.57031 185.133 1.78906 183.961 0.195312 183.023C5.63281 177.352 9.6875 170.859 12.3594 163.547C15.0781 156.234 17.3984 148.523 19.3203 140.414C21.2422 132.258 22.2031 124.289 22.2031 116.508C22.2031 108.68 20.4922 101.344 17.0703 94.5C28.4609 88.8281 38.7969 82.5938 48.0781 75.7969ZM69.3828 100.758C69.2891 95.1797 69.2422 91.7578 69.2422 90.4922C69.2422 89.1797 69.2656 87.7031 69.3125 86.0625C64.6719 82.7812 59.7969 80.0859 54.6875 77.9766C51.3594 80.4609 48.8281 83.3203 47.0938 86.5547C45.3594 89.7422 44.3281 94.4766 44 100.758H69.3828Z"
            fill={useColorModeValue("#1a202c", "#ffffffeb")}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.9045 25.044L52.9997 46.3585L98.3431 67.4294L108.248 46.115C104.294 49.8456 98.6391 51.1088 93.7899 48.8554C88.1402 46.23 85.434 39.691 86.9589 33.3374L86.3983 33.0769C82.5253 38.3393 75.7823 40.4873 70.1326 37.8619C65.2833 35.6084 62.6026 30.4718 62.9045 25.044Z"
            fill={useColorModeValue("#1a202c", "#ffffffeb")}
          />
        </svg>

        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Ykrop
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
