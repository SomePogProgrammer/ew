import $ from "jquery";
const { EmbedBuilder, WebhookClient } = require("discord.js");
const { webhookId, webhookToken } = require("./discord.json");

const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });

const embed = new EmbedBuilder().setTitle("Some Title").setColor(0x00ffff);

$(function () {
  $("#WebhooKForm").submit(function (e) {
    e.preventDefault();
    webhookClient.send({
      content: "Webhook test",
      username: "some-username",
      avatarURL:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fci.codesandbox.io%2F&psig=AOvVaw11GGHLKfCoKq_U8tYREzk4&ust=1684369686535000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOj-u5iM-_4CFQAAAAAdAAAAABAO",
      embeds: [embed]
    });
    // do ajax now
    console.log("submitted");
  });
});
