import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import '../SingleMode/SingleMode.css';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
function Result(){
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));
    return(
        <div className="Result">
            <Card className="form" style={{display : 'flex' , alignItems : 'center'}} >
                <CardContent >
                    <Typography style={{display : 'flex' , alignItems : 'center'}}>
                        <h2>1- Are You Male?</h2>
                    </Typography>
                    <Typography>
                        <h3>YES</h3>
                        <BorderLinearProgress variant="determinate" value={100}/>
                    </Typography>
                    <Typography>
                        <h3>NO</h3>
                        <BorderLinearProgress variant="determinate" value={0}/>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
export default Result;