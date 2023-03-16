# Use a Ruby base image
FROM ruby:3.7

# Set the working directory inside the container
WORKDIR /app

# Copy the Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./

# Install dependencies
RUN bundle install

# Copy the rest of the application into the container
COPY . .

# Expose the port that the application will run on
EXPOSE 9292

# Start the application
CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "9292"]
