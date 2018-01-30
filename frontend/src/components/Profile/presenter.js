import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import PhotoDisplay from "components/PhotoDisplay";

const Profile = props => {
    if (props.loading) {
        return <LoadingProfile />;
    } else if (props.profile) {
        return <RenderProfile {...props} />;
    }
};

const LoadingProfile = props => (
    <div className={styles.profile}>
        <Loading />
    </div>
);

const RenderProfile = props => (
    <div className={styles.profile}>
        <ProfileDetail {...props.profile} />
        <div className={styles.photoList}>
            {props.profile.images.map(photo =>
                <PhotoDisplay photo={photo} key={photo.id} />)}
        </div>
    </div>
)

const ProfileDetail = props => (
    <header className={styles.profileHeader}>
        <div className={styles.profileImage}>
            <div className={styles.squareImage} />
        </div>
        <section className={styles.profileDetail}>
            <div className={styles.profileTop}>
                <h1>{props.username}</h1>
            </div>
            <ul className={styles.profileMiddle}>
                <li className={styles.counterList}>
                    <span className={styles.counterSubject}>게시물 <span className={styles.counter}>{props.post_count}</span></span>
                </li>
                <li className={styles.counterList}>
                    <span className={styles.counterSubject}>팔로워 <span className={styles.counter}>{props.followers_count}</span></span>
                </li>
                <li className={styles.counterList}>
                    <span className={styles.counterSubject}>팔로우 <span className={styles.counter}>{props.following_count}</span></span>
                </li>
            </ul>
            <div className={styles.profileBottom}>
                <h1>{props.name}</h1>{" "}
                <span>{props.bio}</span>
                <a className={styles.website} href={props.website}>{props.website}</a>
            </div>
        </section>
    </header>
)

Profile.propTypes = {
    loading: PropTypes.bool.isRequired,
    profile: PropTypes.shape({
        bio: PropTypes.string,
        followers_count: PropTypes.number.isRequired,
        following_count: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                file: PropTypes.string.isRequired,
                comment_count: PropTypes.number.isRequired,
                like_count: PropTypes.number.isRequired
            })
        ).isRequired,
        name: PropTypes.string,
        post_count: PropTypes.number.isRequired,
        profile_image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        website: PropTypes.string
    })

};

export default Profile;