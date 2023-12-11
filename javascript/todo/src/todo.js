// title
// description
// dueDate
// priority

// notes
// checklist

const createTodo = (newTitle, newDescription, newDueDate, newPriority) => {
    let title = newTitle;
    let description = newDescription;
    let dueDate = newDueDate;
    let priority = parseInt(newPriority);

    return {
        get title() { return title; },
        get description() { return description; },
        get dueDate() { return dueDate; },
        get priority() { return priority; },


        set title(text) { title = text; },
        set description(desc) { description = desc; },
        set dueDate(date) { dueDate = date; },
        set priority(updatedPriority) { priority = parseInt(updatedPriority); }
    };
};

export { createTodo }; 