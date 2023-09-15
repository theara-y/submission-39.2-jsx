const Person = ({name, age, hobbies}) => (
    <div class="person container">
        <p>Learn some information about this person</p>
        <h3>{name} ({age} years)</h3>
        <h3><span>Voting Status: </span>{age > 18 ? 'Please go vote!' : 'You must be 18'}</h3>
        <h4>Hobbies:</h4>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>
)

export default Person;