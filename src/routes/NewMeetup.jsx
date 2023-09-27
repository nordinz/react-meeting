import NewMeetupForm from '../Components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';

function NewMeetupPage() {
  const history = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-5c977-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history('/');
      console.log('hello');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
