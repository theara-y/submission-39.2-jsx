const Tweet = ({username, name, date, message}) => (
    <div class="tweet container">
        <div class="tweet profile image"></div>
        <div class="tweet name">{name}</div>
        <div class="tweet username">@{username}</div>
        <div class="tweet message">{message}</div>
        <div class="tweet date">{date}</div>
        <div class="tweet subscribe button"><button>+ Follow</button></div>
        <div class="tweet actions">
            <a href="#">Reply</a>
            <a href="#">Forward</a>
            <a href="#">Favorite</a>
        </div>
    </div>
);

export default Tweet;