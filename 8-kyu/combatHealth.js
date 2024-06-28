const combat = (health, damage) => {
    // Write your code here
    health = health - damage;
    if (health < 0) return 0;
    return health;
}