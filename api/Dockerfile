# Use a Ruby base image
FROM ruby:2.7

# Set the working directory inside the container
WORKDIR /app

# Copy the Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./

# Install dependencies
RUN bundle install

# Copy the rest of the application into the container
COPY . .

# Expose the port that the application will run on
EXPOSE 4567

# Start the application
CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "4567"]
