import React from 'react';
import PropType from 'prop-types';

import SelectInput from '../common/select-input';
import TextInput from '../common/text-input';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, value, errors}) => {
  return (
    <form >
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        title="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Author"
        options={allAuthors}
        defaultOption="Select Author"
        onChange={onChange}
        error={errors.authorId}
      />
      <TextInput
        name="category"
        title="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />
      <TextInput
        name="length"
        title="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      />

      <input
        type="submit"
        onClick={onSave}
        disabled={loading}
        value={loading ? 'Saving' : 'Save'}
        className="btn btn-primary"
      />
    </form>
  );
};

CourseForm.propType = {
  course: PropType.object.isRequired,
  allAuthors: PropType.array.isRequired,
  onSave: PropType.func.isRequired,
  onChange: PropType.func.isRequired,
  loading: PropType.bool,
  errors: PropType.object
}

export default CourseForm;
