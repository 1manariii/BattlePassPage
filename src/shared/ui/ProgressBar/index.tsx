import { FC } from "react";
import { ProgressBarContainer, ProgressBarFill } from "./styles";
import { IProps } from "./types";



const ProgressBar: FC<IProps> = ({ exp }) => {
    return (
        <ProgressBarContainer>
            <ProgressBarFill exp={exp} />
        </ProgressBarContainer>
    );
};

export default ProgressBar;