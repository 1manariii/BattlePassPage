import { ProgressBarContainer, ProgressBarFill } from "./styles";

interface ProgressBarProps {
    exp: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ exp }) => {
    return (
        <ProgressBarContainer>
            <ProgressBarFill exp={exp} />
        </ProgressBarContainer>
    );
};

export default ProgressBar;