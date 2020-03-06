import React from "react";
import PropTypes from "prop-types";
import styles from './Profile.module.css';

function Profile ({user}){
    const {name, tag, location, avatar, stats} = user;
    return (
        <>
        <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="user avatar"
      className={styles.img}
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.list}>
    <li>
      <span className={styles.listItem}>Followers</span>
      <span className={styles.stats}>{
      stats.followers}</span>
    </li>
    <li>
      <span className={styles.listItem}>Views</span>
      <span className={styles.stats}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.listItem}>Likes</span>
      <span className={styles.stats}>{
      stats.likes}</span>
    </li>
  </ul>
</div>
        </>
    )
}

Profile.propTypes = {
    user: PropTypes.exact({
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.string.isRequired,
            views: PropTypes.string.isRequired,
            likes: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired
};

export default Profile;