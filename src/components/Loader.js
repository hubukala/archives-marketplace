import {
    SkChase,
    SkChaseDot,
    SkChaseContainer,
} from '../styles/animations/Chase';

const Loader = () => {
    return (
        <SkChaseContainer>
            <SkChase>
                <SkChaseDot></SkChaseDot>
                <SkChaseDot></SkChaseDot>
                <SkChaseDot></SkChaseDot>
                <SkChaseDot></SkChaseDot>
                <SkChaseDot></SkChaseDot>
                <SkChaseDot></SkChaseDot>
            </SkChase>
        </SkChaseContainer>
    );
};

export default Loader;
