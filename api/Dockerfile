# Use a Ruby base image
FROM ruby:3.0.2

# Set the working directory inside the container
WORKDIR /app

# Copy the Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./
COPY .ruby-version  ./

# Install dependencies
RUN bundle install

# Copy the rest of the application into the container
COPY . .

# Expose the port that the application will run on
EXPOSE 9292

# Start the application rackup config.r
CMD ["bundle", "exec", "rackup", "config.ru", "--host", "0.0.0.0", "-p", "9292"]
